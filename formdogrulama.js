function formDogrulama()
{
var kadi = document.iletisimformu.kadi;
var sifre = document.iletisimformu.sifre;
var isim = document.iletisimformu.isim;
var adres = document.iletisimformu.adres;
var ulke = document.iletisimformu.ulke;
var pk = document.iletisimformu.pk;
var email = document.iletisimformu.email;
var ecinsiyet = document.iletisimformu.ecinsiyet;
var kcinsiyet = document.iletisimformu.kcinsiyet; 
if(kadi_dogrulama(kadi,5,12))
{
if(sifre_dogrulama(sifre,7,12))
{
if(hepsiHarf(isim))
{
if(alfanumerik(adres))
{ 
if(ulkesecim(ulke))
{
if(hepsiNumara(pk))
{
if(emailKontrol(email))
{
if(cinsiyetKontrol(ecinsiyet,kcinsiyet))
{
	return true;
}
} 
}
} 
}
}
}
}
return false;

} function kadi_dogrulama(kadi,mx,my)
{
var kadi_len = kadi.value.length;
if (kadi_len == 0 || kadi_len >= my || kadi_len < mx)
{
alert("Kullanıcı adı boş olamaz. İzin verilen kullanıcı adı basamak uzunluğu "+mx+" - "+my);
kadi.focus();
return false;
}
return true;
}
function sifre_dogrulama(sifre,mx,my)
{
var sifre_len = sifre.value.length;
if (sifre_len == 0 ||sifre_len >= my || sifre_len < mx)
{
alert("Şifre boş olamaz. İzin verilen şifre uzunluğu "+mx+" - "+my);
sifre.focus();
return false;
}
return true;
}
function hepsiHarf(isim)
{ 
var harfler = /^[A-Za-z]+$/;
if(isim.value.match(harfler))
{
return true;
}
else
{
alert('İsim boş olamaz.');
isim.focus();
return false;
}
}

function ulkesecim(ulke)
{
if(ulke.value == "Default")
{
alert('Lütfen ülke seçiniz.');
ulke.focus();
return false;
}
else
{
return true;
}
}
function emailKontrol(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("Lütfen geçerli bir email adresi giriniz.");
email.focus();
return false;
}
} function cinsiyetKontrol(ecinsiyet,kcinsiyet)
{
x=0;

if(ecinsiyet.checked) 
{
x++;
} if(kcinsiyet.checked)
{
x++; 
}
if(x==0)
{
alert('Lütfen cinsiyet seçiniz');
ecinsiyet.focus();
return false;
}
else
{
return true;
}
}