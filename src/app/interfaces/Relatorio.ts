interface Relatorio {
    Nome: string
    Grupo: "Usuário - Acesso Total" | "Usuário - Acesso Parcial" | "Administrador"
    QtdAcesso: number
    UltimoAcesso: string
  }