<!doctype html>
<html>
  <head>
    <title></title>
    <meta charset="utf-8" />
  </head>
  <body>
    Welcome <?php echo $_POST["name"]; ?> <br>
    Your email address is: <?php echo $_POST["email"]; ?>
    <br>
    <?php
    $a = $_POST["A"];
    $b = $_POST["B"];
    echo  $a . '*' .  $b . "=" .  $a * $b;
    ?>

  </body>
</html>
