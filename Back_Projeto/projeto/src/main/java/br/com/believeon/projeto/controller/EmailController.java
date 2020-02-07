package br.com.believeon.projeto.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.believeon.projeto.email.EnviaEmailTLS;
import br.com.believeon.projeto.email.Mensagem;

@RestController
@CrossOrigin("*")
public class EmailController {
	
	@PostMapping("/email/enviar")
	public ResponseEntity<String> enviaEmail(@RequestBody Mensagem msg){
		if (EnviaEmailTLS.sendEmail( msg.getNome(),msg.getSobrenome(),msg.getFromEmail(), msg.getTelefone(), msg.getCidade(),msg.getEstado(), msg.getMensagem())) {
			return ResponseEntity.ok("Enviado");
		}
		return ResponseEntity.badRequest().build();
	}

}
