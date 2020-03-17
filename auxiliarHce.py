def insertaHce(datos):
    sentencia = """
    insert into historia values ( ?, idPaciente, 'hora', 'fecha', 2, 2, 
    'motivo', 'antecedentes', 'examen', 'paraclinicos', 'diagnostico', 'plan', 'control',
    null,null,null,null,null,null,null,null,null, 'causa', 'finalidad', 'tipo');
    """
    sentencia = sentencia.replace('?',datos['index'])
    sentencia = sentencia.replace('idPaciente',datos['idPaciente'])
    sentencia = sentencia.replace('hora',datos['hora'])
    sentencia = sentencia.replace('fecha',datos['fecha'])
    sentencia = sentencia.replace('motivo',datos['motivo'])
    sentencia = sentencia.replace('antecedentes',datos['antecedentes'])
    sentencia = sentencia.replace('examen',datos['examen'])
    sentencia = sentencia.replace('paraclinicos',datos['paraclinicos'])
    sentencia = sentencia.replace('diagnostico',datos['diagnostico'])
    sentencia = sentencia.replace('plan',datos['plan'])
    sentencia = sentencia.replace('control',datos['control'])
    sentencia = sentencia.replace('causa',datos['causa'])
    sentencia = sentencia.replace('finalidad',datos['fin'])
    sentencia = sentencia.replace('tipo',datos['tipo'])
    return sentencia
def creaCita(datos):
    sentencia2 ="""
    insert into cita values('hora','fecha', 2, idPaciente, null, null);
    """
    sentencia2 = sentencia2.replace('hora',datos['hora'])
    sentencia2 = sentencia2.replace('fecha',datos['fecha'])
    sentencia2 = sentencia2.replace('idPaciente',datos['idPaciente'])
    return sentencia2
def indexHce(cursor):
    sentencia = """
    select idhistoria from historia order by idhistoria desc limit 1;
    """
    cursor.execute(sentencia)
    resultado = cursor.fetchall()
    return str(int(resultado[0]['idhistoria'])+1)
def consultaHce(cursor, idPaciente):
    sentencia = """ 
    select motivoConsulta,antecedentes, examenFisico, paraclinicos, diagnostico,
    plan, causaExterna,finalidadConsulta, tipoDiagnostico from historia 
    where paciente_idPaciente = ? ; 
    """
    sentencia = sentencia.replace('?', idPaciente)
    cursor.execute(sentencia)
    resultado = cursor.fetchall()
    return resultado[0]
def indexPaciente(cursor, pac):
    sentencia = """
    select idPaciente from paciente where numeroDoc = '?';
    """
    sentencia = sentencia.replace('?', pac)
    cursor.execute(sentencia)
    resultado = cursor.fetchall()
    return str(int(resultado[0]['idPaciente']))
