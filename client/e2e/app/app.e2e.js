'use strict';

describe('Tela inicial', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('Deveria ter um título', function() {
    var titulo = element(by.css('.titulo'));
    expect(titulo.getText()).toBe('Página Inicial');
  });

  it('Deveria ter um link para listar usuário', function() {
    var link = element(by.css('.link'));
    expect(link.getText()).toBe('Listar Usuários');
    expect(link.getAttribute('ui-sref')).toBe('usuario.listar');
  });

});



