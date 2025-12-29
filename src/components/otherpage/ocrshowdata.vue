<template>
    <div class="container">
      <canvas ref="canvas" class="canvas"></canvas>
      <table class="table">
        <thead>
          <tr>
            <th>序号</th>
            <th>文本</th>
            <th>置信度</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in datas" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ data[1] }}</td>
            <td>{{ (data[2].toFixed(2)*100).toFixed(0) }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        datas:  this.$datass.value,
        imageSrc: this.$imgurl.value
      };
    },
    mounted() {
      this.drawCanvas();
      this.drawTable();
    },
    methods: {
      drawCanvas() {
        console.log(this.datas)
        const canvas = this.$refs.canvas;
        const context = canvas.getContext('2d');
        const image = new Image();
        image.src = this.imageSrc;
  
        image.onload = () => {
          const maxWidth = canvas.width;
          const maxHeight = canvas.height * 0.8;
  
          const width = image.width;
          const height = image.height;
  
          let scaleRatio = 1;
          if (width > maxWidth || height > maxHeight) {
            scaleRatio = Math.min(maxWidth / width, maxHeight / height);
          }
  
          canvas.width = width * scaleRatio;
          canvas.height = height * scaleRatio;
  
          context.drawImage(image, 0, 0, width, height, 0, 0, width * scaleRatio, height * scaleRatio);
  
          this.datas.forEach((data) => {
            const coordinates = data[0];
            const text = data[1];
  
            context.beginPath();
            context.lineWidth = '2';
            context.strokeStyle = 'red';
  
            context.moveTo(
              coordinates[0][0] * scaleRatio,
              coordinates[0][1] * scaleRatio
            );
  
            coordinates.forEach((coordinate) => {
              context.lineTo(coordinate[0] * scaleRatio, coordinate[1] * scaleRatio);
            });
  
            context.lineTo(
              coordinates[0][0] * scaleRatio,
              coordinates[0][1] * scaleRatio
            );
  
            context.closePath();
            context.stroke();
  
            // context.fillStyle = 'red';
            // context.fillRect(
            //   coordinates[0][0] * scaleRatio,
            //   (coordinates[0][1] - 20) * scaleRatio,
            //   text.length * 20,
            //   20
            // );
  
            context.fillStyle = 'red';
            context.fillText(
              text,
              coordinates        [0][0] * scaleRatio,
        (coordinates[0][1] - 5) * scaleRatio
      );
    });
  };
},
drawTable() {
  const canvas = this.$refs.canvas;
  const context = canvas.getContext('2d');

  const table = document.querySelector('.table');
  const rows = table.rows;

  const rowHeight = table.offsetHeight / rows.length;

  context.font = `${rowHeight / 2}px Arial`;

 
}
}
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.canvas {
  max-width: 800px;
  max-height: 600px;
  margin-bottom: 20px;
  border: 1px solid black;
}

.table {
  max-width: 250px;
  border-collapse: collapse;
  text-align: center;
  font-size: 16px;
}

.table th {
  background-color: black;
  color: white;
  padding: 10px;
}

.table td,
.table th {
  max-width: 80px;
  border: 1px solid black;
  padding: 10px;
}
</style>
  