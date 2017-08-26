class CreatePostFormController{
    constructor(API, ToastService, $http){
        'ngInject';

        this.API = API;
        this.$http = $http;
        this.ToastService = ToastService;

        this.list = [];

        this.getList();
    }

    submit(){
        console.log('ahihi')
        var data = {
            name: this.name,
        };

        this.API.all('add-name').post(data).then((response) => {
            // this.ToastService.show('Post added successfully');
            console.log('OK')
            this.getList();
            this.name = "";

        });
    }

    getList(){
        console.log('get-list');
        this.$http.get('api/get-list').then((response) => {
                // this.ToastService.show('Post added successfully');
                console.log(response.data)
                if(!response.data.errors){
                    console.log('aaaaaaaa')
                    this.list = response.data.data.data; 
                    console.log(this.list);
                }
        });
    }

    delete($id){
        console.log($id)
        var url = 'api/delete-name/' + $id;
        console.log(url)
        this.$http.get(url).then((response) => {
                // this.ToastService.show('Post added successfully');
                console.log(response.data)
                if(response.data > 0){
                    // var str = "item" + response.data;
                    // $(str).css('display', 'none');
                    this.getList();
                }
                // if(!response.data.errors){
                //     this.getList();
                //     $('#item'+$id).css('display', 'none');
                // }
        });
    }

    checkbox($id){
        console.log('checked')
        console.log($id)
        var url = 'api/checked-item/' + $id;
        console.log(url)
        this.$http.get(url).then((response) => {
                // this.ToastService.show('Post added successfully');
                console.log(response)
                if(!response.data.errors){
                    console.log('aaaaaaaa')
                    this.getList();
                }
        });
    }
}

export const CreatePostFormComponent = {
    templateUrl: './views/app/components/create_post_form/create_post_form.component.html',
    controller: CreatePostFormController,
    controllerAs: 'vm',
    bindings: {}
}