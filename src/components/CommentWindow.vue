<template>
  <div>
    <!-- Comment Section -->
    <section id="comment">
      <div class="comment-container">
        <div class="comment-left-container">
          <div class="text">
            <h2 class="comment-title">Leave a comment</h2>
            <p class="comment-text">Your feedback helps me to improve my ability in every aspects</p>
          </div>
        </div>
        <div class="comment-right-container">
          <div class="input-container">
            <form id="comment-form">
              <div class="input-groups">
                <textarea
                  name="feedback"
                  id="feedback"
                  cols="30"
                  rows="10"
                  placeholder="Comments here.."
                  v-model="comment"
                ></textarea>
                <input
                  type="text"
                  name="user-name"
                  id="user-name"
                  placeholder="Your name.."
                  v-model="userName"
                />
              </div>
              <div class="submit-group">
                <div class="sub-btn-container">
                  <button
                    type="button"
                    id="submit-button"
                    class="submit-button"
                    @click="commentSubmit($event)"
                  >Submit my feedback</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      comment: "",
      userName: ""
    };
  },
  methods: {
    commentSubmit: async function(event) {
      if (this.comment === "" && this.userName === "") {
        alert("Cannot submit empty details");
      } else {
        var response = await axios.post("./api/comments", {
          userName: this.userName,
          comment: this.comment
        });
        if (response.data.id) alert("Thanks for the feedback");
        else alert("Error in sending the comment");
      }
      event.target.blur();
      this.comment = "";
      this.userName = "";
      event.preventDefault();
    }
  }
};
</script>

<style >
#comment {
  min-height: 40vh;
  /* background: rgba(202, 127, 152, 0.788); */
  box-shadow: 0px 0px 10px 0px rgba(51, 51, 51, 0.63);
}
.comment-container {
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
}
.comment-left-container {
  flex: 1;
  height: 100%;
  display: flex;
}
.comment-right-container {
  flex: 1;
  height: 100%;
  display: flex;
}

/* comment text styles */
.text {
  margin-top: calc(100% - 90%);
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 0px;
}
.comment-title {
  font-size: 35px;
  font-weight: 500;
}
.comment-text {
  font-size: 18px;
  font-weight: 300;
  font-style: italic;
  color: rgb(51, 51, 51);
  margin-top: 10px;
}

/* comment input styles */
.input-container {
  width: 100%;
  display: flex;
  margin-top: calc(100% - 90%);
  flex-direction: column;
  /* justify-content: flex-end; */
}

.input-groups {
  display: flex;
  justify-content: flex-end;
  align-content: space-around;
  margin: auto;
  flex-wrap: wrap;
}
.input-groups input,
.input-groups textarea {
  background: rgba(255, 255, 255, 0.863);
  width: 80%;
  height: 35px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.712);
  padding: 10px;
  box-shadow: none;
  transition: 0.3s all linear;
}
.input-groups textarea {
  height: 70px;
}
.input-groups input:focus,
.input-groups textarea:focus {
  outline: none;
  border: 0px solid rgba(128, 128, 128, 0.712);
  box-shadow: 0px 0px 10px rgba(54, 54, 54, 0.726);
}
.input-groups input:hover,
.input-groups textarea:hover {
  box-shadow: 0px 0px 5px rgba(54, 54, 54, 0.726);
}

/* submit section */
.submit-group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
}
.sub-btn-container {
  width: 80%;
  margin-left: calc(20% - 4.5px);
}
.submit-group .submit-button {
  background: rgb(255, 60, 60);
  color: rgb(255, 255, 255);
  border: none;
  height: 35px;
  padding: 5px;
  width: fit-content;
  border-radius: 3px;
  font-weight: lighter;
  font-size: 13px;
  box-shadow: 0px 2px 5px 1px rgba(107, 107, 107, 0.479);
  transition: 0.1s all ease;
}
.submit-button:hover {
  box-shadow: 0px 2px 5px 1px rgba(107, 107, 107, 0.288);
}
.submit-group .submit-button:focus {
  background: rgb(255, 93, 93);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 3px;
  outline: 1px solid rgb(255 67 67);
  margin: 2px;
  padding: 5px;
  box-shadow: 0px 2px 10px 1px rgba(107, 107, 107, 0.479);
}

@media screen and (max-width: 1028px) {
  .comment-container {
    flex-direction: column;
    justify-content: center;
  }
  .text {
    width: 80%;
    justify-content: center;
    padding: 0px;
    margin-top: calc(100% - 95%);
  }
  .comment-left-container {
    justify-content: center;
  }
  .comment-right-container {
    justify-content: center;
  }
  .input-container {
    margin-top: calc(100% - 95%);
  }
  .input-groups {
    justify-content: center;
  }
  .sub-btn-container {
    margin: auto;
    justify-content: center;
    width: auto;
  }
  .submit-group {
    margin-bottom: 10px;
    margin-top: 4px;
    width: auto;
  }
  .comment-title {
    text-align: center;
    font-size: 25px;
  }
  .comment-text {
    text-align: center;
    font-size: 16px;
  }
}
</style>