package br.com.believeon.projeto.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.believeon.projeto.model.Administrador;
import br.com.believeon.projeto.security.Token;
import br.com.believeon.projeto.security.Validacao;

@RestController
@CrossOrigin("*")
public class AdministradorController {

	
	@PostMapping("/login/administrador")
	public ResponseEntity<Token> autentica(@RequestBody Administrador administrador){
		//Simulando o login de administrador.
		if(administrador.getEmailADM().contentEquals("ADM@adm.com") && administrador.getSenhaADM().equals("12345")) {
			administrador.setId(1);
			administrador.setNome("Administrador");


			//CONSTRUINDO o token.
			String tk = Validacao.generateToken(administrador);
			System.out.println("O token gerado = "+tk);
			Token token = new Token();
			token.setConstruindoToken(tk);
			return ResponseEntity.ok(token);
		}else {
			return ResponseEntity.status(403).build();
		}
	}

}