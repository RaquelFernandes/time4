<?php
namespace App\Http\Controllers;

use App\Aluno;

class AlunosController extends Controller {

  public function index() {
      $tawan = new Aluno();
      $tawan->id = '01';
      $tawan->nome = 'Tawan Gabriel';
      $tawan->matricula = '1514290044';
      $tawan->email = 'tawan.gabriel10@gmail.com';

      $raquel = new Aluno();
      $raquel->id = '02';
      $raquel->nome = 'Raquel Fernandes';
      $raquel->matricula = '1514290042';
      $raquel->email = 'raquelsol-10@hotmail.com';

      $alunos = array($tawan, $raquel);

      return view('alunos/listagem', ['alunos'=>$alunos]);
  }
}

 ?>
