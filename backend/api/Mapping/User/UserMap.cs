using Mapster;
using Pims.Dal.Entities;
using Entity = Pims.Dal.Entities;
using Model = Pims.Api.Models.User;

namespace Pims.Api.Mapping.User
{
    public class UserMap : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.NewConfig<Entity.User, Model.UserModel>()
                .Map(dest => dest.Id, src => src.Id)
                .Map(dest => dest.KeycloakUserId, src => src.KeycloakUserId)
                .Map(dest => dest.IsDisabled, src => src.IsDisabled)
                .Map(dest => dest.BusinessIdentifier, src => src.BusinessIdentifier)
                .Map(dest => dest.FirstName, src => src.Person.FirstName)
                .Map(dest => dest.Surname, src => src.Person.Surname)
                .Map(dest => dest.Email, src => src.Person.GetEmail())
                .Map(dest => dest.Organizations, src => src.Organizations)
                .Map(dest => dest.Roles, src => src.Roles)
                .Inherits<Entity.BaseAppEntity, Models.BaseAppModel>();

            config.NewConfig<Model.UserModel, Entity.User>()
                .Map(dest => dest.Id, src => src.Id)
                .Map(dest => dest.KeycloakUserId, src => src.KeycloakUserId)
                .Map(dest => dest.IsDisabled, src => src.IsDisabled)
                .Map(dest => dest.BusinessIdentifier, src => src.BusinessIdentifier)
                .Map(dest => dest.Person.FirstName, src => src.FirstName)
                .Map(dest => dest.Person.Surname, src => src.Surname)
                .Map(dest => dest.Organizations, src => src.Organizations)
                .Map(dest => dest.Roles, src => src.Roles)
                .Map(dest => dest.Position, src => src.Position)
                .Inherits<Models.BaseAppModel, Entity.BaseAppEntity>();
        }
    }
}
