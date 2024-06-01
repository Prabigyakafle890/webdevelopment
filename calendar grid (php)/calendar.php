<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar grid</title>
    <style>
        body{
            background-color: rgb(87, 109, 218);
            display: flex;
            justify-content: center;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(4, 100px);
            grid-template-rows: repeat(4, 100px);
            gap: 5px;
            margin-top: 8%;
        }
        .box {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            font-size: 24px;
            border: 2px solid rgb(30, 30, 30);;
        }
        .box:hover{
            background-color: rgb(253, 207, 121);
        }
    </style>
</head>
<body>
    <div class="grid">
        <?php
            for ($i = 1; $i <= 16; $i++) {
                echo "<div class='box'>$i</div>";
            }
        ?>
    </div>
</body>
</html>