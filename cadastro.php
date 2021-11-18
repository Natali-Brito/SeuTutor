<?php
    
    $conexao=mysqli_connect("localhost","root","","contato");

    
    $cpf = $_POST["cpf"];
    $nome = $_POST["nome"];    
    $sobrenome = $_POST["sobrenome"];   
    $telefone = $_POST["tel"];    
    $skype = $_POST["skype"];  
    $email = $_POST["email"];   
    $endereco = $_POST["endereco"];
    $imagem = $_FILES["foto"];   
    $data_nasc = $_POST["data"];  
    $sobre = $_POST["sobre"];

    $dias = "";
    foreach ($_POST['dia'] as $campo => $valor) { $$campo = $valor;

        $dias.= " ".$valor;
    }

    $turno = "";
    foreach ($_POST['turno'] as $x => $y) { $$x = $y;

        $turno.= " ".$y;
    }
      
        
    if (empty($cpf) or empty($nome) or empty($sobrenome) or empty($email) or empty($telefone) or empty($skype) or empty($endereco) or /*empty($turno) or*/ empty($dias) or empty($data_nasc) or empty($sobre)){
        echo "campos vazios";
    }else{
        $resultado1 = mysqli_query($conexao,"SELECT cpf FROM cadastro WHERE cpf='{$cpf}'");
        $resultado2 = mysqli_query($conexao,"SELECT telefone FROM cadastro WHERE telefone='{$telefone}'");
        $resultado3 = mysqli_query($conexao,"SELECT skype FROM cadastro WHERE skype='{$skype}'");
        $resultado4 = mysqli_query($conexao,"SELECT email FROM cadastro WHERE email='{$email}'");

        if (mysqli_num_rows($resultado1) > 0){

            echo "<script>alert('CPF já cadastrado no sistema!');window.location.replace('candidate-se.html');</script>";
        }elseif (mysqli_num_rows($resultado2) > 0){

            echo "<script>alert('TELEFONE já cadastrado no sistema!');window.location.replace('candidate-se.html');</script>";  
        }elseif (mysqli_num_rows($resultado3) > 0){

            echo "<script>alert('SKYPE já cadastrado no sistema!');window.location.replace('candidate-se.html');</script>";
        }elseif (mysqli_num_rows($resultado4) > 0){

            echo "<script>alert('E-MAIL já cadastrado no sistema!');window.location.replace('candidate-se.html');</script>";
        }else{
            $nomeFinal = time().'.jpg';
        move_uploaded_file($imagem['tmp_name'], $nomeFinal);
        mysqli_query($conexao,"INSERT INTO cadastro (cpf, nome, sobrenome, telefone, skype, email, endereco, foto, dias, turno, data_nasc,  sobre ) VALUES ('$cpf', '$nome', '$sobrenome', '$telefone', '$skype', '$email',  '$endereco', '$nomeFinal', '$dias', '$turno',  '$data_nasc', '$sobre')");
         echo "<script>alert('Cadastro realizado com sucesso!');window.location.replace('candidate-se.html');</script>";
        }    
    }

?>
