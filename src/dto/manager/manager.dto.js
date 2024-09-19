class managerDTO {
  constructor(username, email, password, role) {
    this.username = username
    this.email = email
    this.password = password
    this.role = role
  }
}

class createManagerDTO {
  constructor(username, email, password, role) {
    this.username = username
    this.email = email
    this.password = password
    this.role = role
  }
}

class updateManagerDTO {
  constructor(username, email, role) {
    this.username = username
    this.email = email
    this.role = role
  }
}