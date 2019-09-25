import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'; 


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[]
         }
    }


componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
        this.setState({users:res.data});
    })
    .catch(function(error){
            console.log(error);
        })
    }

    render(){ 
        return ( 
<div  className="Container-api">
   
   
    
    {this.state.users.map(e => {return(<div key={e.id} className="container">
    <header className="header">
        <img className="photo"src="http://rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png" alt="image"/>
        <h5>{e.username}</h5>
    </header>
    <body className="Body">
    <Link id='link' to={`/Posts/${e.id}`}>
    <h6>{e.name}</h6> 
    </Link>
    <div className="email">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///+AgIR2dnp6en59fYHw8PDj4+R1dXqamp14eH3S0tPo6Ol7e4CVlZj4+Pj8/PzExMbc3N25ubuGhoqfn6KQkJOvr7Hg4OGpqay8vL6mpqnt7e7X19iEhIjMzM6QkJQykI01AAAHmUlEQVR4nO2dgZaiOgyGoa1iUREVGB1F3/8tLzp75t47u6SBpiTt2f8BZvqZ0jRpm2TZX/1VZFpt13ituEc7WffGKGXRUoVpjtxjnqJ7b00+UUa1W+5xo9UVU/F+MT64R45UY2cBDipK7rGj1M0GHBDX3KNH6D5vin7J5NzDR+g8eY35r3TNPX6nSo85+rYiN4BTjZcJ89yKX2y0H2BuGm4Ch1Y+68yXEbkRHNoqX0IlfGfjT6jv3AywCAiF+wt/QtNxM8C6ea80Zs/NAMufMD9zM8Baec/S3By4IUBV/jZUsjMaB38bWuHpDAJC4ZG+7750cIgnbgZYnqHFIPPJzQDr7E/YcjPAav2NqLgZYG38CYuKGwKUb4yfi4+fLv6EWnYi40TgLmTHT7U/ofD4qSQg3HBDgDp65ktfkh0/+Qf5w4coOn5aEdhQdvx08PcWuf3gpgDVExDKjp/2BC5fdvxEsKnZXbghQF0JHKLs+InA5Qs/RFwTuAsrOn4iyCfm6sZNAYrCIcpOKBLkMYQ7xM+dN6Fwh1j7E+5kJxTv/oup8BO2G0H8JDtCzCgcougIkSQpLDpCzDoCdyE7Qnz4T1PhKdO1/1Kzk50yPSSfMs2e3h+i9Pt7/kuNeXIzwKLIe3MzwCLY1WjZDpFgV2OFE/ofk0on9D9ik310kWVb31yNER5c+B9eSPf4/jcylOxUVEbwIXIDOOV5TrqTnYl6y2+WSl9JX/JKKdor9/AR8tma7mTfxfilav7GbSc7lfit2emoOCyYzc98RwM4d+MWD+DMy8IxAc66pBgV4JycYlyAWTYdMBI38a2pGTcdmQWHaTptNY3OgtnE1TQ+C2bTVtMoAac4/TgBJ0zT2NzEt7C5jFgtiA6h4gVEptxiBkRdrYkaEPOiNHJAt0uMHdB5khg9oGutSQAQXmtSAASjxDQAgX2N8Ed4aI1fH9LcQ6NSN5Y41bIvc+M1Xs+l5x4alUYvZgh/0YzXeL5mJ/ppzASNvtfT4u8jIHUcNWIh+/UPXqMnbam4xOw+upwWwgvsoTVetTUVjzFuROEvnPAavxct/RIiVsdRIwp/4oTX+MWFSGp4O/Uxns4QXkUQrfF0hvDHhmgBxzSF+KuWOEG1FtKYp0BZFy27SgRaQHY4kc0bePk7jXkKlNxPZT0F7iuqNPw+dLCfyP70Mr7YCK9JgxX0ujSROKoETtsS2dpAdbJMEslFqP+F9KexSEGFshL5FKGH3ml4RfC2m00iRQzdzzB9EhtU6LFJGokpsAeGTeK0poYuaKgkThXBR1HyX8giVIGXwQrZFctxgvanw3KTQiR1gZ62mT6FHSrYJjGJHSp8azHG5yW/6QG+VdgJLzKEEpDSGKRTyL7BHUttAonwFXxFWiUQLY6fDL9VJIB4hV8rpIDYwBO1SCDQcBSvo46lDstvlirHuyFL5zQ+Tk9dFMW5uZaL5kq2jodDmsb1H+pc6a9f02htTXup77eFMiauTuWaYgNXmh8/pDHaFrr9vJbb8BO3dryrMWfvMTQjv+LAqZXNN119XIU0aOeYqKb3jBdbx+urt0HN26CBOBtHHRRjvaL+Pe4p69ugRd6cQkxcZ8FT63GVweFzfwMdOPV54KRdcJ31eorZpaM2s+o5vT/QTf1BZs2qdyGqmaHGRAv+wLS2rYk+zSp3Iep2zu/pA/hFaS3R7nhlXIgmX0/+q/Om6A/pGf/4T7q5B6OmvpTytuAvEd2Bvbkffqtpu1QSC1IiIqoS6fME508HSHbdZ+seksH/mpSAZKd+W+0uwlAg3QYpIF3715tzRc3z3Rnzz4gB6ari3px+8eWi3EeM1ICEbVPcu5tBdu/48OkBc023gYMTxV8ycEeoAICUbVMOT0xRSQWYMQQgbWMY1FbEFGNfIzIe5CTMOlQNLfv8YwgXxILkzX2uKERTdL+HNoEAydsXwQf939rlP1ecjX9PtGUIsy3C97//cfu/0CYYYIAWVNUTmUAqLv96qnCAQZpsNch60ua7/ndAwDBtxK7YIq/663MMCRioUVqpsDVQbf8ICxiqFdztjF77NSLy8lGwZncNQTdFEoVr51ejZ2pYBWxYuO4D7VKmKWhLxk8JMzVs08nS8s/UwG01Vy1Bc1PRhK9og9mM4Vujci84SzR/7VgXnEXa27KacaEGvic+979Ui+It26K6XBPmhw4aQgggzKoLy1RdtJH2mmOqLtwq/GEWn6pLN0M/nIqFGZdv975qlv0cORrar9slGTkIs+y4ICMP4RA5npcKHbkIl2PkI1yKkZMwy+7P8PExL+Gwrm5CrznchFl261TQ6JGfcNiSX/OAH6QEwkH3fbDNnBDCYTPXBTKkGMJB5SbEFymJcDDk9Uy+tMoiHLTuDO1sFUc46NjlhJaku7lHqo+uV0Rnw2S3L8m1vbYFwXwlu0EbRNXjMy92fpRUt6DDaX3dK48JG0n9qnW9yZWeZUwVT5m1W9k97WTMIra+Rtuy25vCauTtwFhLH6yOddcarbQL1MRdfqxal9fL5qzVYNIXq/mJa9Q+nm8QUnX7KOtT97nZt33/eluprVXD6tt34t3ELB2qqlq9JHOr9lfz9Q8DlWsfZO+QMQAAAABJRU5ErkJggg==" alt="telephone"/>   
    <p>{e.phone}</p>
    </div>
    <div className="email">
      <img src="data:image/png;base64,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" alt="telephone"/>     
    <p>{e.address.city}</p>
    </div>
    
    <div className="email" >
    <img src="http://www.ken-partnersarl.com/wp-content/uploads/2016/06/1607310-enveloppe-email-courrier-diapo-1.jpg" alt="email"/>
    <p>{e.email}</p>
    
 </div> 
   
    </body>
      </div>
     )}
   )
}
  
  
</div>
         );
    }

}
export default Users;