
const e = React.createElement;

class AppForm extends React.Component {
        constructor(props){
                super(props);
                //Add change handler to form
                this.handleChange = this.handleChange.bind(this);
                //Add submit handler to form
                this.handleSubmit = this.handleSubmit.bind(this);

                this.state = {
                        firstName:'',
                        lastName:'',
                        age:'',
                        dateApplied:new Date(),
                        experience:'0',
                        description:'Tell me about yourself',
                        qualifications:'What makes you so qualified?'
                };
        }
        handleChange(event){
                this.setState({[event.target.name]:event.target.value});
        }

        handleSubmit(event){
                alert("This is working");
                event.preventDefault();
        }

        render() {
          return (
            <form onSubmit={this.handleSubmit}>
                <br />First Name:
                <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
                <br />Last Name:
                <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}  />
                <br />Age:
                <input name="age" type="number" value={this.state.age} onChange={this.handleChange} />
                <br />Cooking Experience:
                <select name="experience" value={this.state.experience} onChange={this.handleChange}>
                        <option value="0">0 Years</option>
                        <option value="1-2">1-2 Years</option>
                        <option value="2-3">2-3 Years</option>
                        <option value="3-5">3-5 Years</option>
                        <option value="5-10">5-10 Years</option>
                        <option value="10+">10+ Years</option>
                </select>
                <br />
                Description of Yourself:
                <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                <br />
                Qualifications:
                <textarea name="qualifications" value={this.state.qualifications} onChange={this.handleChange} />
                <br />
                <input type="submit" value="Submit" />
                </form>
          );
        }
};


const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');
const container3 = document.querySelector('#container3');
ReactDOM.render(e(AppForm), container1);
ReactDOM.render(e(AppForm), container2);
ReactDOM.render(e(AppForm), container3);
