        function add(value) {
    
        var span1 = document.createElement('span')
        var container = document.getElementById('container')
        container.append(span1)
        span1.innerText =  value
        span1.classList.add('span')
        }    
        
        var array = []
        function select() {
            var input = document.querySelector('input')
            add(input.value)

            array.push(input.value)

            var JsonArray =  JSON.stringify(array) 

            console.log(JsonArray)
            localStorage.setItem('keys', JsonArray)

            input.value = ""

        }
        function ReadForLocal() {
            var did =  localStorage.getItem('keys')
            if (did) {
                did = JSON.parse(did)
            }
            else{
                did = []
            }
            return did
            
        }
        function getFunc(file) {
            
            
        }
        

        ReadForLocal()







       







