 let page = 1;
        const elementsPerPage = 12;
        let elementsData = [];

        const mainContainer = document.getElementById('cardContainer');

        function loadElements() {
            if (elementsData.length === 0) {
                fetch('https://raw.githubusercontent.com/neelpatel05/periodic-table-api/refs/heads/master/data.json')
                    .then(res => res.json())
                    .then(data => {
                        elementsData = data;
                        renderPage();
                    });
            } else {
                renderPage();
            }
        }

        function renderPage() {

            mainContainer.innerHTML = "";

            const start = (page - 1) * elementsPerPage;
            const end = start + elementsPerPage;
            const currentPageElements = elementsData.slice(start, end);

            currentPageElements.forEach(element => {

                let color = element.cpkHexColor ? `#${element.cpkHexColor}` : '#366AFA';
                let bgColor = `${color}BF`;
                let textColor = getContrastYIQ(color);
                let elementState = element.standardState.toUpperCase();

                if (element.atomicNumber === 9) {
                    color = '#FDFD96';
                    bgColor = '#FDFD96BF';
                    textColor = '#000000';
                }

                mainContainer.innerHTML += `
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 my-3">
                <div class="card rounded-5 h-100" style="border: solid 5px ${color}; background-color: ${bgColor}; color: ${textColor}">
                    <div class="row mt-4">
                        <div class="col-5">
                            <div class="text-center display-3 m-0">${element.atomicNumber}</div>
                        </div>
                        <div class="col-7 my-auto">
                            <div class="text-center h4 m-0">${element.atomicMass}</div>
                        </div>
                    </div>

                    <div class="row my-3">
                        <div class="col text-center">
                            <div class="display-2"><b>${element.symbol}</b></div>
                            <div class="my-3 h3">${element.name}</div>
                            <div class="h5 mt-3"><i>${element.electronicConfiguration}</i></div>
                            ${elementState ? `<div class="h6"><b>${elementState}</b></div>` : ''}
                            <div class="h6"><i>${element.groupBlock}</i></div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col text-center">
                            <div class="h6">Discovered in ${element.yearDiscovered || 'Unknown'}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
            });
        }

        function nextPage() {
            const maxPage = Math.ceil(elementsData.length / elementsPerPage);
            if (page < maxPage) {
                page += 1;
                loadElements();
            }
        }

        function prevPage() {
            if (page > 1) {
                page -= 1;
                loadElements();
            }
        }

        function getContrastYIQ(hexColor) {
            const hex = hexColor.replace('#', '');
            const r = parseInt(hex.substr(0, 2), 16);
            const g = parseInt(hex.substr(2, 2), 16);
            const b = parseInt(hex.substr(4, 2), 16);
            const yiq = (r * 299 + g * 587 + b * 114) / 1000;
            return yiq >= 128 ? '#000000' : '#FFFFFF';
        }

        loadElements();