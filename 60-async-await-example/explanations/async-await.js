async function requestHandler(req, res) {
  try {
    const user = await user.findById(req.userId);
    const tasks = await tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    res.send("Task completed");
  } 
  catch(e) {
    res.send(e)
  }
}
