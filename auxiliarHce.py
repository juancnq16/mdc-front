def insertaHce(cursor, datos):
    sentencia = """
    insert into historia values ( idHistoria, idPaciente, 'hora', 'fecha', 2, 2, 
    'motivo', 'antecedentes', 'examen', 'paraclinicos', 'diagnostico', 'plan', 'control',
    null,null,null,null,null,null,null,null,null, 'causa', 'finalidad', 'tipo');"
    """
    sentencia2 ="""
    insert into cita values('hora','fecha', 2, idPaciente, null, null);
    """
    pass
def indexHce(cursor):
    sentencia = "select id"
    pass
def consultaHce(cursor):
    pass
def indexPaciente(cursor):
    pass