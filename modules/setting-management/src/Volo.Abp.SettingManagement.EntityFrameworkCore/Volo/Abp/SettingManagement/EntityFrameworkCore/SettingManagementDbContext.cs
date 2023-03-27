using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.MultiTenancy;

namespace Volo.Abp.SettingManagement.EntityFrameworkCore;

[IgnoreMultiTenancy]
[ConnectionStringName(AbpSettingManagementDbProperties.ConnectionStringName)]
public class SettingManagementDbContext : AbpDbContext<SettingManagementDbContext>, ISettingManagementDbContext
{
    public DbSet<Setting> Settings { get; set; }

    public SettingManagementDbContext(DbContextOptions<SettingManagementDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ConfigureSettingManagement();

        base.OnModelCreating(builder);
    }
}
