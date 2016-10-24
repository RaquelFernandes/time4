<?php
namespace App\Http\Controllers;

class AlunosController extends Controller {

  public function index() {
      $alunos = array(
        0 => array(
          'nome'=>'Tawan'
        )
      );
      return view('alunos/listagem', ['alunos'=>$alunos]);
  }
}

 ?>
