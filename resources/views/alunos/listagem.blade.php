
@extends('app')

@section('content')

  <h1>Alunos</h1>

  <table class="table table-striped table-bordered table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Matrícula</th>
        <th>E-mail</th>
        <th>Opções</th>
      </tr>
      </thead>
      <tbody>
        @foreach($alunos as $aluno)
          <tr>
            <td>{{ $aluno->id }}</td>
            <td>{{ $aluno->nome }}</td>
            <td>{{ $aluno->matricula }}</td>
            <td>{{ $aluno->email }}</td>
            <td>
              <a class="btn btn-link btn-xs"
                title="Editar" rel="tooltip" data-placement="top">
                <span class="glyphicon glyphicon-pencil"></span>
              </a>
              <a class="btn btn-link btn-xs" data-toggle="modal"
                  title="Excluir" rel="tooltip" data-placement="top">
                <span class="glyphicon glyphicon-remove"></span>
              </a>
            </td>
          </tr>
        @endforeach
      </tbody>
  </table>

@endsection
