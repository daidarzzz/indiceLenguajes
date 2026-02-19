<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Datos recibidos</title>
</head>
<body>

    <h1>Datos recibidos del formulario</h1>

    <table>
        <caption>Información del alumno</caption>
        <tbody>
            <tr>
                <th>Nombre</th>
                <td><?php echo $_POST['nombre']; ?></td>
            </tr>
            <tr>
                <th>Apellidos</th>
                <td><?php echo $_POST['apellidos']; ?></td>
            </tr>
            <tr>
                <th>Fecha de nacimiento</th>
                <td><?php echo $_POST['fecha']; ?></td>
            </tr>
            <tr>
                <th>Email</th>
                <td><?php echo $_POST['email']; ?></td>
            </tr>
            <tr>
                <th>Teléfono</th>
                <td><?php echo $_POST['telefono']; ?></td>
            </tr>
            <tr>
                <th>Número de hermanos</th>
                <td><?php echo $_POST['hermanos']; ?></td>
            </tr>
            <tr>
                <th>Comentarios</th>
                <td><?php echo $_POST['comentarios']; ?></td>
            </tr>
        </tbody>
    </table>

    <p>
        <a href="ej2.html">volver al formulario</a>
    </p>

</body>
</html>