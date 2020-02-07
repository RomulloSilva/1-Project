package br.com.believeon.projeto.email;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class EnviaEmailTLS {

	public static boolean sendEmail(Email msg) {
		 
	 	Email t = new Email();
	 	t = msg;
	 	
	 	System.out.println(t.getFromEmail());
	 	
        final String username = "believeonadm@gmail.com";
        final String password = "gyqobkwfddvsergg";

        Properties prop = new Properties();
		prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "587");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.starttls.enable", "true"); //TLS
        
        Session session = Session.getInstance(prop,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, password);
                    }
                });

        try {

        	Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("believeonadm@gmail.com"));
            message.setRecipients(
                    Message.RecipientType.TO,
                    InternetAddress.parse("believeonadm@gmail.com")
            );
            message.setSubject("Fale conosco: " + t.getNome()+ " " + t.getSobrenome());
            message.setText("Usuário: "+t.getNome()+ " "+ t.getSobrenome() +"\n" + "E-mail: " + t.getFromEmail()+ "\n"+"Telefone: " + t.getTelefone() +" \n"+"Mensagem: " + t.getMensagem());
            
            Transport.send(message);
            return true;

        } catch (MessagingException e) {
            e.printStackTrace();
            return false;
        }
    }

}
