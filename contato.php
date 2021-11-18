<?php
    
    $conexao=mysqli_connect("localhost","root","","contato");

    $nome = $_POST["nome"];
    $sobrenome= $_POST["sobrenome"];
    $email= $_POST["email"];
    $telefone= $_POST["tel"];
    $mensagem= $_POST["msg"];
    
    if (empty($nome) or empty($sobrenome) or empty($email) or empty($telefone) or empty($mensagem)) {
        header("location:contato.html");
    }else{  
        mysqli_query($conexao,"INSERT INTO form_contato (nome,sobrenome,email,telefone,mensagem) VALUES ('$nome','$sobrenome','$email','$telefone','$mensagem')");
        echo "<script>alert('mensagem enviada!');window.location.replace('index.html');</script>";

    }


?>
