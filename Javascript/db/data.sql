INSERT INTO users 
(name, surname, user_name, birth_date, gender, is_premium, email, password) VALUES 
('Alex', 'Dias', 'alexdias', '2000-10-11', 'm', false, 'alexdias@teste.com', 'senha'),
('Brian', 'Walter', 'brian.w', '2002-08-02', 'm', true, 'brian2002@teste.com', 'senha'),
('Camila', 'Gutierrez', 'camigut', '2001-01-22', 'f', true, 'camila.gu@email.com', 'senha'),
('Daniela', 'Pereira', 'danip', '2002-04-18', 'f', false, 'daniela.pereira@teste.com', 'senha'),
('Evandro', 'Vasconcelos', 'evandro.vas', '2004-07-06', 'm', false, 'evandrovas@teste.com', 'senha');


INSERT INTO posts (content, tags, user_id) VALUES 
('Primeiro post do Ano', '#teste #first', 1),
('Segundo post meu', '#agoravai #posts', 1),
('Primeiro post do meu novo perfil', '#sucesso #first', 2),
('Testando sistema', '#teste', 4),
('Toma esse post irado', '#irado #posts', 5);


INSERT INTO comments (content, post_id, user_id) VALUES
('Receba', 1, 1), ('Que que isso', 1, 3), ('O loko meu', 1, 4),
('Testando', 3, 5);


INSERT INTO likes (post_id, user_id) VALUES
(1, 2), (1, 1), (1, 4), 
(2, 1), (2, 2), 
(4, 1), (4, 3), (4, 4), 
(5, 1), (5, 2), (5, 3), (5, 4);


INSERT INTO follows (follower_id, followed_id) VALUES
(2, 1), (1, 2), (1, 4), (1, 3), (3, 4), (3, 5);