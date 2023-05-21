<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>SAKARYA ÜNİVERSİTESİ PROJE</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
	   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      <link rel="stylesheet" href="tasarim.css">
	  <link rel='stylesheet' href='formdogrulama.css' type='text/css' />
		<script src="iletisimsayfa.js"></script>
  
</head>
    
<body onload="document.iletisimformu.kadi.focus();">
  <div class="container">

    <div class="orta">
	<br>	
Merhaba <?php echo $_POST["kadi"]; ?><br>
Şifreniz: <?php echo $_POST["sifre"]; ?><br>
İsminiz: <?php echo $_POST["isim"]; ?><br>
Ülkeniz: <?php echo $_POST["ulke"]; ?><br>
Emailiniz: <?php echo $_POST["email"]; ?><br>
Cinsiyetiniz: <?php if (isset($_POST['ecinsiyet']))
  echo "erkek";    
else 
	echo "kadin";?><br>
Diliniz: <?php echo $_POST["tr"]; ?><br>
Ek olarak yazdiklariniz: <?php echo $_POST["diger"]; ?>



        <div class="temizle"></div>
		
    </div>
	<br>
</div>       
</body>
</html>