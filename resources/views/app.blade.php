<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Laravel</title>

  <link rel="stylesheet" href="{{ asset('css/app.css') }}">

</head>
<body>

    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <img alt="" src="" />
          </a>
        </div>
      </div>

      <ul class="nav nav-pills">
        <li role="presentation" class="active"><a href="">Home</a></li>
        <li role="presentation" class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            Alunos <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="">Consultar</a></li>
            <li><a href="">Cadastrar</a></li>
          </ul>
        </li>
        <li role="presentation" class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            Professores <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="">Consultar</a></li>
            <li><a href="">Cadastrar</a></li>
          </ul>
        </li>
        <li role="presentation" class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            Questões <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="">Listagem</a></li>
            <li><a href="">Inserir</a></li>
          </ul>
        </li>
      </ul>

    </nav>

    <div class="container">

  	     @yield('content')
    </div>

	<!-- Scripts -->
  <script src="{{ asset('js/jquery.min.js') }}"></script>
  <script src="{{ asset('js/bootstrap.min.js') }}"></script>
  <script src="{{ asset('js/sweetalert.min.js') }}"></script>
</body>
</html>
