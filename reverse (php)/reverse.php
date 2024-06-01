<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse the name</title>
</head>
<body>

    <form method="post" action="">
        <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name" required>
        <button type="submit">Submit</button>
    </form>

    <!-- using strrev 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_REQUEST['name'];
        $reversedName = strrev($name);
        echo "<p>Reversed Name: " . htmlspecialchars($reversedName) . "</p>";
    } -->

    
    <!-- using implode and str_split -->
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_REQUEST['name'];

        // string to array
        $nameArray = str_split($name); //use str_split instead of explode as it needs a delimiter and cannot directly split a string into characters

        // array reversed
        $reversedArray = array_reverse($nameArray);

        //array converted back to string
        $reversedName = implode('', $reversedArray);

        echo "<p>Reversed Name: " . htmlspecialchars($reversedName) . "</p>";
    }
    ?>
</body>
</html>