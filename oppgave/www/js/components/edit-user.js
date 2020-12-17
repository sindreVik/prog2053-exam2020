import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render(){
    return html`
    <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    
        <title>Edit user</title>
      </head>
      <body>

      <form onsubmit="javascript: return false;" method="POST">
      <div class="form-group">
        <label for="uname">Username (e-mail)</label>
        <input type="email" class="form-control" id="uname" name="uname" value="${this.user.uname}">
      </div>
     <div class="form-group">
       <label for="firstName">First name</label>
       <input type="text" class="form-control" id="firstName" name="firstName" value="${this.user.firstName}">
     </div>
     <div class="form-group">
       <label for="lastName">Last name</label>
       <input type="text" class="form-control" id="lastName" name="lastName" value="${this.user.lastName}">
     </div>

    
     <div class="form-group">
       <label for="oldpwd">Old password</label>
       <input type="password" class="form-control" id="oldpwd" name="oldpwd" value="">
     </div>
     <div class="form-group">
       <label for="newpwd">New password</label>
       <input type="password" class="form-control" id="newpwd" name="newpwd" value="">
     </div>
     
       
    <button type="submit" @click="${this.updateTheUser}" class="btn btn-primary">Update</button>
    </form>
    
        <!-- Optional JavaScript; choose one of the two! -->
    
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    
        <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
        -->
      </body>
    </html>
    `;}

    updateTheUser(e){

      const dataForm = new FormData(e.target.form);

    console.log(e)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json()
    ).then(res=>{

        if (res.status == 'success') {
            console.log("User was updated!");
            
        } else {

            console.log("User was not updated.");
        }
      })
  }
    

}
customElements.define('edit-user', EditUser);
