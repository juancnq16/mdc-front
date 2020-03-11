select * from historia order by idhistoria desc;
select * from paciente order by idPaciente desc;
select * from cita;
insert into cita values('00:00:00','2020-01-01', 2, 10242, null, null);
insert into historia values ( 24081, 10242, '00:00:00', '2020-01-01', 2, 2, 'motivo', 'antecedentes', 'ecamen', 'paraclinicos', 'diagnostico', 'plan', 'control',
null,null,null,null,null,null,null,null,null, 'causa', 'finalidad', 'tipo');