<template>
    <div id="card-body" class="md-layout ">
      <div class="md-layout-item"></div>
      <div class="md-layout-item md-alignment-center">
        <md-card>
          <div id="textinput">
          <md-field>
          <label>Tên dự án</label>
          <md-input v-model="type" md-counter="100"></md-input>
          </md-field>

          <md-field>
          <label>Mô tả ngắn về dự án được tạo</label>
          <md-textarea v-model="textarea" md-counter="500"></md-textarea>
          </md-field>
          </div>

      <md-card-actions>
        <md-button>Bỏ qua</md-button>
        <md-button>Tạo</md-button>
      </md-card-actions>
    </md-card>
      </div>
      <div class="md-layout-item"></div>
    </div>
</template>
<script>
export default {
  name: 'TextFields',
    data: () => ({
      initial: 'Initial Value',
      type: null,
      withLabel: null,
      inline: null,
      number: null,
      textarea: null,
      autogrow: null,
      disabled: null
    })
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#card-body{
  margin-top: 150px;
}

#md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

</style>