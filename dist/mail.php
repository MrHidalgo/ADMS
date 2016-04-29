<?php
    $action=$_REQUEST['action'];

    if( $action !== '') {
        $message=$_REQUEST['text-email'];

        $subject="Message sent using your contact form";

        mail("luckysnake2016@yandex.ru", $subject, $message);
        echo "Email sent!";
    }

//    if($_POST) {
//        $email_to       = 'luckysnake2016@yandex.ru';
//        $email_subject  = 'ADSM Aero Data Management Systems';
//
//        $text_email     = $_POST['text-email'];
//
//        mail($email_to, $email_subject, $text_email);
//    }
?>
