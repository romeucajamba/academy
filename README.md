## Descrição

Sistema para cadastro de usuário em academia, dando a possibilidade a visualização de vezes que a pessoa pode ir a academia, o usuário só poderá se cadastrar em academias próximo a ele (Geolocalização).

## Regras de negócio
- [✔] O usuário não deve poder se cadastrar com o e-mail já cadastrado no sistema;
- [✔] O usuário não deve fazer dois check-ins ou mais no mesmo dia;
- [✔] O usuário não pode fazer chack-in se não estiver a 100 metros da academia;
- [ ] O check-in só pode ser validado até 20 minutos depois de ser criado
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## Requisitos funcionais
- [✔] Deve ser possível o cadastro de usuário;
- [✔] Deve ser possível se autenticar;
- [✔] Deve ser possível obter os dados de um usário logado;
- [ ] Deve ser possível obter o número de chack-in realizados pelo usuário;
- [ ] Deve ser possível os usuários obter o histórico de check-ins;
- [ ] Deve ser possível os usuários buscarem academias próximas;
- [ ] Deve ser possível os usuários buscarem por academias pelo nome;
- [✔] Deve ser possível o usuário realizar chack-in numa academia;
- [ ]  Deve ser possível validar o check-in de usuários
- [✔] Deve ser possível cadastrar uma academia;


## Requisitos não funcionais
- [✔] A senha do usuário precisa estar criptografada;
- [✔] Os dados da aplicação precisam estar persistidos em um banco de dados PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT(Json web Token)