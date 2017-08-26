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
        var data = {
            name: this.name,
        };

        this.API.all('add-name').post(data).then((response) => {
            // this.ToastService.show('Post added successfully');
            this.getList();
            this.name = "";

        });
    }

    getList(){
        this.$http.get('api/get-list').then((response) => {
                // this.ToastService.show('Post added successfully');
                if(!response.data.errors){
                    this.list = response.data.data.data; 
                    console.log(this.list);
                }
        });
    }

    delete($id){
        var url = 'api/delete-name/' + $id;
        this.$http.get(url).then((response) => {
                if(response.data > 0){
                    this.getList();
                }
        });
    }

    checkbox($id){
        var url = 'api/checked-item/' + $id;
        this.$http.get(url).then((response) => {
                if(!response.data.errors){
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