<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<title>Celke - Upload multiplo</title>
	</head>
	<body>
	
		<form enctype="multipart/form-data" method="POST" action="upload.php">
			<input type="file" name="arquivo[]" multiple="multiple" /><br><br>
			<input name="enviar" type="submit" value="Enviar">
		</form>
	
	</body>
</html>