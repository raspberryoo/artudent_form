// function checkForm() {    
//     var name01 = document.fmField.name01;
//     //신청자 성명 입력 유무 체크
//     if(userId.value == '' || !(name01.value.length >= 3 && userId.value.length <= 12)) {        
//         window.alert("성명을 입력 하시오");        
//         document.fmField.uerId.focus();        
//         document.getElementById('name01').select();        
//         return false; 
//     // 아이디 입력이 안되어 있다면 submint 이벤트를 중지 
//     }

//     var email = document.getElementById('email');    
//     // 이메일 입력 유무 체크    
//     if(document.fmField.email.value == ''){        
//         alert('이메일을 입력 하시오.');        
//         email.focus();        
//         return false;       
//     }
// }

function Checkform() {

    if( frm.name01.value == "" ) {
    
        frm.name01.focus();
        alert("성명을 입력해 주십시오.");
        
        return false;
        
    }
    
}

