<?
$para = "pelucasgladys@outlook.com";
$nombre = $_POST["nombre"];
$de  = $_POST["email"]; 
$asunto = "Envido por Pagina $nombre: ";
$mensaje = $_POST["mensaje"];
$headers ="From: $de"."\r\n";
$headers=$headers."Mime-Version: 1.0\r\n";
$headers=$headers."Content-type: text/html; charset=utf-8\r\n";

if(
mail("pelucasgladys@outlook.com",$asunto,$mensaje,$headers))

    header("Location: index.html");
else
    header("Location: Mail error");

?>
