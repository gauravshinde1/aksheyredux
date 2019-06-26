import React, { Component } from 'react'

// redux connection to component
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {setUser} from "./../store/actions/authAction";
import {getReducer} from "./../store/actions/recipeAction";
import isEmpty from "./../store/validation/is-empty"


export class RecipeList extends Component {
    constructor(){
        super();
        this.state ={
            gaurav:{},
            user:{},
            myRecipes:{}
        }
    }


    componentDidMount(){
        this.props.getReducer()
    }

    static getDerivedStateFromProps(nextprops,nextstate){
        if(nextprops.recipe || nextprops.auth){
            return{
                myRecipes:nextprops.recipe.recipes,
                gaurav:nextprops.auth
            }
        }
       
        return null
    }


    onClickHandler = (e)=> {
        this.props.setUser()
    }

    renderpersonname = () => {
        const { myRecipes } = this.state;
        if (!isEmpty(myRecipes)) {
          return myRecipes.map((recipe, index) => (
            <React.Fragment key={index}>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={recipe.image_url}
              className="img-card-top"
              style={{ height: "14rem" }}
              alt="recipe"
            />
            <div className="card-body text-capitalize">
              <h6>{recipe.title}</h6>
              <h6 className="text-warning text-slanted">
                provided by {recipe.publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-primary text-capitalize"
              
              >
                details
              </button>
              <a
                href={recipe.source_url}
                className="btn btn-success mx-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                recipe url
              </a>
            </div>
          </div>
        </div>
            </React.Fragment>
          ));
        } else {
          return (
            <h3 className="isempty-text dashboard-panel__counts-title mb-0">
              Please add more leads to get responses
            </h3>
          );
        }
      };



    render() {
        console.log(this.state.myRecipes)
        const {isAutheticated , user} = this.state.gaurav

        const {myRecipes} = this.state

        const btn =(
            <button type="submit">submeit me to get result</button>
        )
       
       
        

        return (
            <React.Fragment>

              {this.renderpersonname()}
               

                <h3>RecipeList</h3>
                <button type="submit" onClick ={this.onClickHandler}>submit me to authenticate</button>
                { isAutheticated === true ? btn : "" }
            </React.Fragment>
        )
    }
}

RecipeList.propTypes = {
    auth:PropTypes.object.isRequired,
    setUser:PropTypes.func.isRequired,
    getReducer:PropTypes.func.isRequired,
    recipe:PropTypes.object.isRequired

}


const mapStateToProps = state => ({
    auth:state.auth,
    recipe:state.recipe.recipe
})

export default connect(mapStateToProps,{setUser,getReducer})(RecipeList)