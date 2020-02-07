package br.com.believeon.projeto.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.believeon.projeto.email.EnviaEmailTLS;
import br.com.believeon.projeto.email.Email;

@RestController
@CrossOrigin("*")
public class EmailController {
	
	
	@PostMapping("/formularioA/email")
	public ResponseEntity<Email> enviaEmail(@RequestBody Email msg){
		if (EnviaEmailTLS.sendEmail(msg)) {
			return ResponseEntity.ok(msg);
		}
		return ResponseEntity.badRequest().build();
	}

}
