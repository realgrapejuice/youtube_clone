export const home = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search");
export const videos = (req, res) => res.send("/Videos");
export const upload = (req, res) => res.send("/Upload");
export const videoDetail = (req, res) => res.send("/VideoDetail");
export const editVideo = (req, res) => res.send("/edit Video");
export const deleteVideo = (req, res) => res.send("/delete video");