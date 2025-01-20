# QR-Card

O **QR-Card** é um projeto que evoluiu ao longo do tempo. Originalmente, sua função era gerar QR Codes personalizados que funcionavam como atalhos para o aplicativo do **NuBank**, permitindo que os usuários compartilhassem um código único que, ao ser escaneado, abria diretamente a interface de transferência no app para facilitar o envio de dinheiro, permitindo que outros clientes realizassem transferências de forma ágil e sem complicações. Na época, antes da criação do **PIX**, essa funcionalidade era extremamente útil, pois facilitava o envio de dinheiro sem a necessidade de compartilhar manualmente dados bancários.

Hoje, o **QR-Card** é um gerador de cartões de visita digitais com QR Code. Ele permite que você crie um cartão elegante e personalizado contendo informações como:

- Nome
- Cargo
- Telefone
- Email
- Nome da empresa

O QR Code gerado no cartão inclui um vCard, que é um padrão amplamente utilizado para compartilhar contatos eletrônicos. Isso significa que qualquer pessoa que escanear o QR Code do seu cartão poderá salvar suas informações diretamente no celular.

## Como usar o QR-Card

1. Clone este repositório:
   ```bash
   git clone https://github.com/jadsongmatos/qr-card.git
   ```

2. Abra o arquivo `index.html` em um navegador web.

3. Preencha os campos com suas informações:
   - Nome
   - Cargo
   - Telefone
   - Email
   - Empresa

4. O QR Code será gerado automaticamente no cartão conforme você digitar.

5. Clique no botão "Download" para salvar seu cartão de visita em formato PNG.

## Tecnologias Utilizadas

- **HTML5** e **CSS3**: Para estrutura e estilos da interface.
- **JavaScript**: Para funcionalidade dinâmica, incluindo a geração do QR Code.
- Biblioteca **QRious**: Para criar o QR Code embutido no cartão.

## Contribuições

Contribuições são bem-vindas! Se você tiver idéias para melhorias ou encontrar problemas, fique à vontade para abrir uma issue ou enviar um pull request.
