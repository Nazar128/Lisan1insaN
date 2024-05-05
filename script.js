$(document).ready(function(){
    var arrLang={

        'en':{
            '1':'Home',
            '2':'About us',
            '3':'Contact',
           
            '4':'Search',
            '5':'Hello',
            '6':'Welcome to Lisan1insaN. This is a Language planet and you can live whatever you want and however you want :)',
            '7':'Login',
            '8':'Sign up',
            '9':'About',
            '10':'Us',
            '11':'Why US? Because we have drawn a way that is understandable, entertaining and at the same time instructive. You can improve your vocabulary and grammar knowledge and test it later',
            '12':'Contact Us',
            '13':'With',
            '14':'Name',
            '15':'Email',
            '16':'Write your message here',
            '17':'Submit'

        },


        'tr':{
            '1':'Anasayfa',
            '2':'Hakkımızda',
            '3':'İletişim',
            '4':'Ara',
            '5':'Merhaba',
            '6':"Lisan1insaN'a hoş geldiniz. Burası bir dil gezegeni ve burada dilediğinizi, dilediğiniz gibi yaşayabilirsiniz",
            '7':'Giriş',
            '8':'Üye ol',
            '9':"Hakkımızda",
            '10':'Bizim',
            '11':'Neden biz ? Çünkü anlaşılır, eğlenceli ve aynı zamanda öğretici bir yol çizdik. Kelime ve gramer bilginizi geliştirip daha sonra test edebilirsiniz.',
            '12':'Bizimle İletişime geçin',
            '13':'ile',
            '14':'Ad',
            '15':'Email',
            '16':'Mesajınızı buraya yazın',
            '17':'Gönder'
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

    $('li,button,h1,p,a').each(function(index,element) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
    });





});