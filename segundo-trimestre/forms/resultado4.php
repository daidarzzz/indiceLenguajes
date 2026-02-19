<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultado</title>
</head>
<body>

    <h1>Resultados de la encuesta</h1>

    <ul>
        <li>Producto: <?php echo $_POST['producto']; ?></li>
        <li>Valoración: <?php echo $_POST['valor']; ?></li>
        <li>Probabilidad de recomendar: <?php echo $_POST['recomendar']; ?></li>
        <li>Comentarios: <?php echo $_POST['comentarios']; ?></li>
    </ul>

    <p><a href="encuesta.html">Volver a la encuesta</a></p>

</body>
</html>