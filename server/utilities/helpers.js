export const scheduleActivationDeletion = async (activeId, expirationTime) => {
  try{
    const deletionDate = new Date(Date.now() + expirationTime)
    console.log(`Scheduling deletion of Active ID ${activeId} for ${deletionDate}`);
    const deleteAt = new Date(deletionDate) 
    schedule.scheduleJob(deleteAt, async () => {
      try{
        const deletedCount = await Active.destroy({where: {
          id: activeId
        }});
        if(deletedCount > 0){
          console.log(`Successfully deleted Active ID ${activeId}`);
        }else{
          console.log(`Active ID ${activeId} not found for deletion.`);
        }
      }catch(error){
        console.error(`Error deleting Active ID ${activeId}:`, error);
      }
    })
  }catch(error){
    console.error(`Error scheduling deletion for Active ID ${activeId}: `, error);
  }
}

export const tokenValidation = (authorization, SECRET, req, res) => {
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    try {
      req.decodedToken = jwt.verify(authorization.substring(7), SECRET);
    } catch {
      return res.status(401).json({ error: "token invalid" });
    }
  } else {
    return res.status(401).json({ error: "token missing" });
  }
}