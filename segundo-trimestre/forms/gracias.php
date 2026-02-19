<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Datos Recibidos</title>
</head>
<body>

    <h1>Confirmación de recepción</h1>

    <table border="1">
        <tr>
            <th>Nombre</th>
            <td><?php echo $_GET['nombre']; ?></td>
        </tr>
        <tr>
            <th>Email</th>
            <td><?php echo $_GET['email']; ?></td>
        </tr>
        <tr>
            <th>Curso</th>
            <td><?php echo $_GET['curso']; ?></td>
        </tr>
        <tr>
            <th>Mensaje</th>
            <td><?php echo $_GET['mensaje']; ?></td>
        </tr>
    </table>

    <p>
        <a href="ej1.html">Volver al formulario</a>
    </p>

</body>
</html>