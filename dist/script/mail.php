<?
    if(isset($_POST['submit'])) {
        $email_to       = 'admin@adms.es';
        $email_subject  = 'ADSM Aero Data Management Systems';


        $text_email     = $_POST['text-email'];


        $headers        = array();
        $headers[]      = "MIME-Version: 1.0";
        $headers[]      = "X-Mailer: PHP/".phpversion();


        @mail($email_to, $email_subject, $text_email, implode("\r\n", $headers));
    }
