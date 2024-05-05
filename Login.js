$(document).ready(function(){
    var arrLang={

        'en':{
            '1':'Login',
            '2':'Remember Me',
            '3':'Forgot password?',
            '4':'Login',
            '5':"Don't have an account",
            '6':'Sign Up',
         
        },


        'tr':{
            '1':'Giriş',
            '2':'Beni Hatırla',
            '3':'Şifremi Unuttum',
            '4':'Login',
            '5':'Hesabın yok mu? ',
            '6':'Üye ol',
          
        },

    };
$('.dropdown-item').click(function(){
    localStorage.setItem('dil', JSON.stringify($(this).attr('id')));
    location.reload();
});

    var lang = JSON.parse(localStorage.getItem('dil'));
    if(lang=="en"){
        $("#drop_yazi").html("English");
    }
    else{
        $("#drop_yazi").html("Türkçe");
    }

    $('li,button,h1,p,a').each(function(index,element) {  <div class="dropdown">
                <button class="btn  dropdown-toggle" type="button" id="drop_yazi" data-bs-toggle="dropdown" aria-expanded="false">
                   English
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" id="en"  href="#">English</a></li>
                  <li><a class="dropdown-item" id="tr" href="#">Türkçe</a></li>
                  <li><a class="dropdown-item" href="#">Spanish</a></li>
                </ul>
              </div>
        $(this).text(arrLang[lang][$(this).attr('key')]);
    });





});