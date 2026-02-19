<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resumen de Inscripción</title>
</head>
<body>

    <h1>Resumen de la inscripción</h1>

    <ul>
        <li><strong>Nombre:</strong> <?php echo $_POST['nombre']; ?></li>
        <li><strong>Email:</strong> <?php echo $_POST['email']; ?></li>
        <li><strong>Turno:</strong> <?php echo $_POST['horario']; ?></li>
        <li><strong>Modalidad:</strong> <?php echo $_POST['modalidad']; ?></li>
        
        <li><strong>Asignaturas seleccionadas:</strong>
            <ul>
                <?php if(isset($_POST['programacion'])) echo "<li>Programación</li>"; ?>
                <?php if(isset($_POST['bbdd'])) echo "<li>Bases de Datos</li>"; ?>
                <?php if(isset($_POST['lenguajes'])) echo "<li>Lenguaje de Marcas</li>"; ?>
            </ul>
        </li>
        
        <li><strong>Observaciones:</strong> <?php echo $_POST['observaciones']; ?></li>
    </ul>

    <p>
        <a href="formulario.html">Volver al formulario</a>
    </p>

</body>
</html>