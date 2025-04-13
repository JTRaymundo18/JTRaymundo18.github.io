<?php

$page = "home";
$title = "Home";
$header = "Game Articles";
$color = "rgb(212, 212, 50)";

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {

        case "home":
            $page = "home";
            $title = "Home";
            $header = "Game Articles";
            $color = "rgb(212, 212, 50)";
            break;

        case "fps":
            $page = "fps";
            $title = "FPS";
            $header = "FPS Games";
            $color = "rgb(72, 208, 249)";
            break;

        case "survival":
            $page = "survival";
            $title = "Survival";
            $header = "Survival Games";
            $color = "rgb(163, 249, 72)";
            break;

        case "horror":
            $page = "horror";
            $title = "Horror";
            $header = "Horror Games";
            $color = "rgb(244, 129, 75)";
            break;

        case "story":
            $page = "story";
            $title = "Story Mode";
            $header = "Story Mode Games";
            $color = "rgb(219, 92, 244)";
            break;

        default:
            header("Location: ?page=home");
            break;
    }
} else {
    header("Location: ?page=home");
}

?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Game Stop | <?php echo $title ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link rel="icon" href="shared/img/icon.png">
    <link rel="stylesheet" href="shared/style.css">

</head>

<style>
    .animated-background {
        background: linear-gradient(to top, rgb(241, 194, 142), rgb(253, 235, 192));
        animation: gradientMove 4s linear infinite;
    }

    .card {
        border: 5px solid <?php echo $color ?>;
    }

    .cardview {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .cardview:hover {
        transform: scale(1.03);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
    }

    @font-face {
        font-family: 'Retro';
        src: url('shared/fontStyle/Moogalator.ttf');
    }

    .custom-font {
        font-family: 'Retro';
        text-align: center;
        color:
            <?php echo $color ?>
        ;
        font-size: 28px;
        text-shadow: 2px 4px 4px rgba(135, 64, 6, 0.7);
    }

    .card-body {
        border-top: 5px dashed
            <?php echo $color ?>
        ;
        border-bottom: 5px dashed
            <?php echo $color ?>
        ;
    }

    .card-text {
        text-align: justify;
        text-justify: inter-word;
    }

    .card-title {
        font-weight: bold;
    }
</style>

<body data-bs-theme="dark">

    <div class="container-fluid">
        <div class="row">

            <div class="sidebar">
                <a class="active" href="?page=home">Home</a>
                <a href="?page=fps">FPS</a>
                <a href="?page=survival">Survival</a>
                <a href="?page=horror">Horror</a>
                <a href="?page=story">Story Mode</a>
            </div>

            <div class="content col">
                <div class="my-4 custom-font">
                    <p> <?php echo $header ?> </p>
                </div>

                <div class="card shadow rounded-5 p-4 my-3 animated-background"
                    style="height: 85vh; max-height: 85vh; overflow: scroll; border: 3px solid #161212; margin: auto">

                    <div class="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 mb-3">

                        <?php include('shared/' . $page . '.php') ?>

                    </div>
                </div>



            </div>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>
</body>

</html>