package br.com.believeon.projeto.dao;

import br.com.believeon.projeto.controller.AdministradorController;


public interface AdministradorRepo {
	public AdministradorController findByEmailAndSenha(String email, String senha);
}
