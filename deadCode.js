function getUserRole(user) {
    if (user.isAdmin) {
      return 'Admin';
    } else if (user.isManager) {
      return 'Manager';
    } else {
      return 'User';
    }
    return 'Guest';
  }
  